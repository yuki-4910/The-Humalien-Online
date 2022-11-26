import { Droppable } from 'react-beautiful-dnd';
import { Flex } from '@chakra-ui/react'

import Card from '../card/Card'
import { cardsInHands_props } from '../../interfaces/props'


const CardsInHand = ({ _cards, _clickedCard }:cardsInHands_props) => {
  return (
    <>
        <Droppable
            droppableId='card_in_hand'
            direction='horizontal'
        >
        {
                (provided) => (
                    <Flex
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            _cards.map(( card_, idx_ ) => (
                                    <Card
                                        key={card_._id}
                                        _id={card_._id}
                                        _color={card_.color}
                                        _number={card_.number}
                                        _isFront={card_.isFront}
                                        _displayType={card_.place}
                                        _idx={idx_}
                                        _isDraggable={true}
                                        _clickedCard={_clickedCard}
                                    />
                            ))
                        }
                    {provided.placeholder}
                    </Flex>
                )
        }
        </Droppable>
    </>
  )
}

export default CardsInHand