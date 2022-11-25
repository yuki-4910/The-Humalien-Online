import { Center, Flex } from '@chakra-ui/react'

import Card from '../card/Card'
import { container } from './CardsFieldStyles'
import { cardsField_props } from '../../interfaces/props'
import { Droppable } from 'react-beautiful-dnd'

const CardsField = ({ _cards }:cardsField_props) =>
{


  return (
	<>
		<Flex>
			<Flex
				sx={container}
			>
				<Droppable
					droppableId='card_in_field'
					isDropDisabled={true}
				>
				{
					(provided) => (
						<Flex
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							<Center>
							{
								_cards.map(( card_, idx_ ) => (
										<Card
											key={card_._id}
											_id={card_._id}
											_color={card_.color}
											_number={card_.number}
											_isFront={card_.isFront}
											_displayType={'field'}
											_idx={idx_}
											_isDraggable={false}
										/>
								))
							}
							</Center>
						{provided.placeholder}
						</Flex>
					)
				}
				</Droppable>
			</Flex>
		</Flex>
	</>
  )
}

export default CardsField