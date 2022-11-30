import { Box, HStack, VStack } from '@chakra-ui/react';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../card/Card'
import { stack_container, } from './CardStacksStyles';
import { cardsStacks_props } from '../../interfaces/props';

const CardStacks = ({ _cards, _clickedCard, _isDraggable, _isDropDisabled }:cardsStacks_props) =>
{
    const stack_titles = ['A', 'B', 'C', 'D', 'E'];


  return (
    <>
    <HStack
        spacing={{ base: 3, md: 5, lg: 7 }}
    >
        {
            _cards.map(( stack_, alphabet_ ) => (
                <Droppable
                droppableId={ 'stack_' + stack_titles[ alphabet_ ] }
                key={alphabet_}
                isDropDisabled={_isDropDisabled}
                >
                    {
                        ( provided, snapshot ) => (
                            <Box
                                sx={stack_container}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <VStack>
                                    {
                                        stack_.map(( card_, card_idx_ ) => (
                                                <Card
                                                    key={ card_._id }
                                                    _id={ card_._id }
                                                    _color={ card_.color }
                                                    _number={ card_.number }
                                                    _isFront={ card_.isFront }
                                                    _displayType={
                                                        snapshot.isDraggingOver
                                                        ? 'stack_dragging'
                                                        : card_.place
                                                    }
                                                    _idx={card_idx_}
                                                    _isDraggable={_isDraggable}
                                                    _clickedCard={_clickedCard ? _clickedCard : ()=>{}}
                                                />
                                        ))
                                    }
                                </VStack>
                                {provided.placeholder}
                            </Box>
                        )
                    }
                </Droppable>
            ))
        }
    </HStack>
    </>
  )
}

export default CardStacks;