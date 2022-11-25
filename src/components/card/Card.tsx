import { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Center, Flex, Text } from "@chakra-ui/react";
import { Icon } from '@iconify/react';
import { card_props } from "../../interfaces/props";
import { card, card_number__top, card_number__bottom, card__symbol, card_in_hands, card_stack, card_field } from "./CardStyle";

const Card = ({ _id, _number, _color, _isFront, _displayType, _idx, _isDraggable }:card_props) =>
{
	const [ cardColor, setCardColor ] = useState<string>('');
	const [ number, setNumber ] = useState<string>('');
	const [ symbol, setSymbol ] = useState<string>('');
	const [ styling, setStyling ] = useState({});

	const setCardHex = (): void =>
	{
		switch ( _color )
		{
			case 'red':
				setCardColor('#6F1515');
				break;

			case 'blue':
				setCardColor('#1F72A0');
				break;

			case 'green':
				setCardColor('#1C6F15');
				break;

			case 'yellow':
				setCardColor('#DBC964');
				break;

			case 'white':
				setCardColor('#7D7A7E');
				break;
		}
	};

	const setCardTitle = (): void =>
	{
		switch ( _number )
		{
			case 333:
				setNumber('🦉');
				break;

			case 666:
				setNumber('');
				break;

			case 999:
				setNumber('👽');
				break;

			default:
				setNumber( _number.toString() );
		}
	}

	const setCardSymbol = (): void =>
	{
		switch ( _number )
		{
			case 6:
				setSymbol('💀');
				break;

			case 7:
				setSymbol('😇');
				break;

			default:
				setSymbol('');
		}
	}

    const setCardStyling = (): void =>
    {
		switch ( _displayType )
		{
			case 'hand':
				setStyling({...card, ...card_in_hands});
				break;

            case 'stack':
                setStyling({...card, ...card_stack});
                break;

            case 'field':
                setStyling({...card, ...card_field });
                break;

			default:
				setStyling({ ...card });
		}
    }

	useEffect(() => {
		setCardHex();
		setCardTitle();
		setCardSymbol();
        setCardStyling();
	}, [])

  return (
	<>
    <Draggable
        draggableId={_id}
        index={_idx}
        isDragDisabled={!_isDraggable}
    >
    {
        (provided) => (
            <Flex
                onClick={() => {console.log('clicked')}}
                sx={styling}
                border={ _isFront ? `2px solid ${cardColor}` : '2px solid #1B156F' }
                background={ _isFront ? '#313036' : '#343343' }
                className='card'
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                {
                    (_isFront)
                    ? (
                        <>
                            <Text
                                sx={card_number__top}
                                paddingLeft={ (number === '🦉' || number === '👽') ? '0': '3px'}
                            >
                                { number }
                            </Text>
                            <Center
                                sx={card__symbol}
                            >
                                {
                                    (_number === 666)
                                    ? (
                                        <Text
                                            fontSize={{ base: '2rem', md: '6rem', lg: '8vw' }}
                                        >
                                            <Icon icon='akar-icons:eye-open' />
                                        </Text>
                                    )
                                    : (
                                        <Text>
                                            { symbol }
                                        </Text>
                                    )
                                }
                            </Center>
                            <Text
                                sx={card_number__bottom}
                                paddingLeft={ (number === '🦉' || number === '👽') ? '0': '3px'}
                            >
                                { number }
                            </Text>
                        </>
                    ):
                    (
                        <></>
                    )
                }
            </Flex>
        )
    }
    </Draggable>
	</>
  )
}

export default Card;