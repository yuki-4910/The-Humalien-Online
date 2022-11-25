import { useState, useEffect } from 'react';
import { Center, VStack } from "@chakra-ui/react"
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import CardsInHand from "../cards_in_hand/CardsInHand"
import CardStacks from "../card_stacks/CardStacks"
import CardsField from '../cards_field/CardsField';
import Header from '../header/Header';
import TableButtons from '../table_buttons/TableButtons';
import { card_obj } from "../../interfaces/props";

import all_cards from '../../CardData..json';

const Table = () =>
{
	let cards: card_obj[] = JSON.parse(JSON.stringify( all_cards ));
	const [ cardsInHand, setCardsInHand ] = useState<card_obj[]>([]);
	const [ cardsStacks, setCardsStacks ] = useState<card_obj[][]>([]);
	const [ cardsOnField, setCardsOnField ] = useState<card_obj[]>([]);

	const initializeTableCards =  (): void =>
	{
		let for_hands: card_obj[] = [];
		let single_stack: card_obj[] = [];
		let for_stacks: card_obj[][] = [];

		for ( let idx = 0; idx < 30; idx++ )
		{
			let drew_idx = Math.floor(Math.random() * ( cards.length )); // [ 0, cards.length )
			let selected_card = {...cards[ drew_idx ]};

			if ( idx < 10 )
			{
				selected_card = { ...selected_card, isFront: true };

				for_hands.push( selected_card );
			}
			else
			{
				if ( single_stack.length < 4 )
				{
					if (single_stack.length === 3)
					{
						selected_card = { ...selected_card, isFront: true };
					}
					single_stack.push( selected_card );

					if ( single_stack.length === 4 )
					{
						for_stacks = [...for_stacks, single_stack];
						single_stack = [];
					};
				};
			};

			cards.splice( drew_idx, 1 );
		};

		setCardsInHand( for_hands );
		setCardsStacks( for_stacks );
	};

	const dragAndDropHandler = ( result_: DropResult ) :void|null =>
	{
		const { source, destination } = result_;
		console.log(result_);


		// outside of droppable area
		if ( !destination )
			return;

		// card has dragged and dropped in same place
		if ( destination.droppableId === source.droppableId
			&& destination.index === source.index )
			return;

		// card has dragged and dropped to reorder within the same stack
		if ( destination.droppableId === source.droppableId
			&& destination.droppableId !== 'card_in_hand'
			&& source.droppableId !== 'card_in_hand' )
			return;

		// card attempt to drag and drop across between Hand and Stack
		if (( destination.droppableId.includes('card_in_hand')
			&& source.droppableId.includes('stack_') )
			|| ( destination.droppableId.includes('stack_')
			&& source.droppableId.includes('card_in_hand') ))
			return;

		// Reordering cards in hand
		if ( destination.droppableId === 'card_in_hand'
			&& source.droppableId === 'card_in_hand' )
			{
				let cards_in_hand: card_obj[] = [...cardsInHand];
				let dropped_card: card_obj = cards_in_hand[source.index];

				cards_in_hand.splice( source.index, 1 );
				cards_in_hand.splice( destination.index, 0, dropped_card );

				setCardsInHand( cards_in_hand );
			};

		// Moving card from one stack to another iff the dropped card is same number as top card on destination stack
		if ( destination.droppableId !== source.droppableId
			&& destination.droppableId !== 'card_in_hand'
			&& source.droppableId !== 'card_in_hand' )
			{
				const stack_order = [ 'A', 'B', 'C', 'D', 'E' ];
				let stacks: card_obj[][] = JSON.parse(JSON.stringify( cardsStacks ));

				const source_stack: string = source.droppableId.charAt( source.droppableId.length-1 ) // 'A', 'B' 'C'... etc
				const destination_stack: string = destination.droppableId.charAt( destination.droppableId.length-1 ) // 'A', 'B' 'C'... etc

				const source_idx = stack_order.indexOf(source_stack);
				const destination_idx = stack_order.indexOf(destination_stack);

				const selected_card: card_obj = stacks[source_idx][source.index];
				const destination_card: card_obj = stacks[destination_idx][stacks[destination_idx].length -1]; //top card on the destination stack

				if ( selected_card.number === destination_card.number)
				{
					stacks[source_idx].splice( source.index, 1);
					stacks[source_idx][source.index -1].isFront = true;

					stacks[destination_idx].splice( stacks[destination_idx].length -1, 0, selected_card );

					setCardsStacks( stacks );
				} else {
					return;
				}
			}

	};

	const cardsOnFieldHandler = () =>
	{

	};

	useEffect(() => {
		initializeTableCards();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


  return (
	<>
		<DragDropContext
			onDragEnd={dragAndDropHandler}
		>
			<Center
				width='100%'
				height='100%'
			>
				<VStack
					height='100vh'
					justifyContent='space-around'
				>
                    <Header>
                        <CardStacks
                            _cards={cardsStacks}
                        />
                    </Header>


					<CardsField
						// _cards={cardsInHand.slice(0,5)}
						_cards={[]}
					/>

                    <TableButtons>
                        <CardsInHand
                            _cards={cardsInHand}
                        />
                    </TableButtons>
				</VStack>
			</Center>
		</DragDropContext>
	</>
  )
}

export default Table