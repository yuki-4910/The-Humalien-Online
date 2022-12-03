import { useState, useEffect } from 'react';
import { Center, VStack } from "@chakra-ui/react"
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import CardsInHand from "../cards_in_hand/CardsInHand"
import CardStacks from "../card_stacks/CardStacks"
import CardsField from '../cards_field/CardsField';
import Header from '../header/Header';
import FieldContainer from '../field_container/FieldContainer';
import TableButtons from '../table_buttons/TableButtons';
import { card_obj } from "../../interfaces/props";

import all_cards from '../../CardData..json';

const Table = () =>
{
	let cards: card_obj[] = JSON.parse(JSON.stringify( all_cards ));
	const [ cardsInHand, setCardsInHand ] = useState<card_obj[]>([]);
	const [ cardsStacks, setCardsStacks ] = useState<card_obj[][]>([]);
	const [ cardsOnField, setCardsOnField ] = useState<card_obj[]>([]);
	const [ selectedCards, setSelectedCards ] = useState<card_obj[]>([]);

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
				selected_card['place'] = 'hand'

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
					selected_card['place'] = 'stack'
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

                    if ( source.index > 0 )
                    {
                        stacks[source_idx][source.index -1].isFront = true;
                    }

					stacks[destination_idx].splice( stacks[destination_idx].length -1, 0, selected_card );

					setCardsStacks( stacks );
				} else {
                    console.log('im here');

					return;
				}
			}

	};

	const cardsOnFieldHandler = ( btn_type_ :string ): void =>
	{
		if ( btn_type_ === 'place_btn' )
		{
			setCardsOnField( selectedCards );
		}
		else if ( btn_type_ === 'pass_btn' )
		{
			setCardsOnField( [] );
		};

		let hand: card_obj[] = [ ...cardsInHand ];
		let stacks: card_obj[][] = JSON.parse(JSON.stringify( cardsStacks ));

		for ( let idx=0; selectedCards.length > idx; idx++ )
		{
			if ( selectedCards[idx].place === 'hand' )
			{
				const hand_idx = cardsInHand.findIndex(( card ) => card._id === selectedCards[idx]._id);
                if ( btn_type_ === 'place_btn' )
                {
                    hand.splice( hand_idx, 1 );
                }
                else if ( btn_type_ === 'pass_btn' )
                {
                    hand[hand_idx].place = 'hand'
                };
			}
			else if ( selectedCards[idx].place === 'stack' )
			{
				for ( let s_idx=0; stacks.length > s_idx; s_idx++ )
				{
					const stack_idx = stacks[s_idx].findIndex(( card ) => card._id === selectedCards[idx]._id);
					if ( stack_idx !== -1 )
					{
                        if ( btn_type_ === 'place_btn' )
                        {
                            if ( stack_idx !== 0 && stacks[s_idx][stack_idx +1]?.isFront !== true)
                            {
                                stacks[s_idx][stack_idx -1].isFront = true;
                            }
                            stacks[s_idx].splice(stack_idx, 1);
                        }
                        else if ( btn_type_ === 'pass_btn' )
                        {
                            stacks[s_idx][stack_idx].place = 'stack';
                        };
					};
				}
			}
		};

		setCardsInHand( hand );
		setCardsStacks( stacks );

		setSelectedCards([]);

	};

	const clickedCardsHandler = ( id_ : string, idx_: number, origin_: string ): void =>
	{
		let selected_cards: card_obj[] = [ ...selectedCards ];

		const result = selected_cards.filter(( card ) => card._id === id_);

		if ( result.length === 0 ) //card has not been selected
		{
			if ( origin_ === 'hand' )
			{
				const temp_hands = [...cardsInHand];
				const selected_card = {...temp_hands[ idx_ ]};

				temp_hands[ idx_ ].place = 'hand_selected';
				setCardsInHand( temp_hands );

				selected_cards.push( selected_card );
			}
			else if ( origin_ === 'stack' )
			{
				const temp_stacks = [...cardsStacks];

				for ( let s_idx = 0; s_idx < temp_stacks.length; s_idx++ )
				{
					if ( temp_stacks[ s_idx ].length > idx_ )
					{
						if ( temp_stacks[ s_idx ][ idx_ ]._id === id_
							&& temp_stacks[ s_idx ][ idx_ ].isFront === true )
						{
							const selected_card = {...temp_stacks[ s_idx ][ idx_ ]};
							temp_stacks[ s_idx ][ idx_ ].place = 'stack_selected';

							selected_cards.push( selected_card );
						};
					};
				};

				setCardsStacks( temp_stacks );
			};

			setSelectedCards( selected_cards );
		}
		else { // when user clicked same card twice to deselect
			const remaining_cards = selected_cards.filter(( card ) => card._id !== id_);

			if ( origin_ === 'hand_selected' )
			{
				const temp_hands = [...cardsInHand];
				temp_hands[ idx_ ].place = 'hand';

				setCardsInHand( temp_hands );
			}
			else if ( origin_ === 'stack_selected' )
			{
				const temp_stacks = [...cardsStacks];

				for ( let s_idx = 0; s_idx < temp_stacks.length; s_idx++ )
				{
					if ( temp_stacks[ s_idx ].length > idx_ )
					{
						if ( temp_stacks[ s_idx ][ idx_ ]._id === id_)
						{
							const selected_card = {...temp_stacks[ s_idx ][ idx_ ]};
							temp_stacks[ s_idx ][ idx_ ].place = 'stack';

							selected_cards.push( selected_card );
						};
					};
				};
			};

			setSelectedCards( remaining_cards );
		};

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
							_clickedCard={clickedCardsHandler}
                            _isDraggable={true}
                            _isDropDisabled={false}
						/>
					</Header>

                    <FieldContainer
                        _opponentsStack={cardsStacks}
                    >
                        <CardsField
                            _cards={cardsOnField}
                        />
                    </FieldContainer>

					<TableButtons
						_clickedPass={ cardsOnFieldHandler }
						_clickedPlace={ cardsOnFieldHandler }
					>
						<CardsInHand
							_cards={cardsInHand}
							_clickedCard={clickedCardsHandler}
						/>
					</TableButtons>
				</VStack>
			</Center>
		</DragDropContext>
	</>
  )
}

export default Table