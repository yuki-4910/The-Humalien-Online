import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../card/Card'
import { stack_container, stack_text } from './CardStacksStyles';
import { cardsStacks_props } from '../../interfaces/props';

const CardStacks = ({ _cards, _clickedCard }:cardsStacks_props) =>
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
                >
                    {
                        ( provided ) => (
                            <VStack
                            spacing={0}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            >
                                {/* <Text
                                    sx={stack_text}
                                >
                                    { stack_titles[ alphabet_ ] }
                                </Text> */}
                                <Box
                                    sx={stack_container}
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
                                                        _displayType={ card_.place }
                                                        _idx={card_idx_}
                                                        _isDraggable={true}
                                                        _clickedCard={_clickedCard}
                                                    />
                                            ))
                                        }
                                    </VStack>
                                </Box>
                            {provided.placeholder}
                            </VStack>
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