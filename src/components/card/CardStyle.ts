export const card =
{
    cursor: 'pointer',

    flexDirection: 'column',
    justifyContent: 'space-between',

    // height: { base: '90px', md: '12rem', lg: '15rem' },
    height: { base: '5.7rem', sm: '8rem', md: '12rem', lg: '23vh' },
    width: { base: '3rem', sm: '5rem', md: '7rem', lg: '8.5vw' },

    borderRadius: { base: '5px', md: '8px', lg: '10px' },

    boxShadow: '-1px 1px 2px rgba(21, 20, 27, 0.2), 1px -1px 2px rgba(21, 20, 27, 0.2), -1px -1px 2px rgba(83, 82, 107, 0.9), 1px 1px 3px rgba(21, 20, 27, 0.9)',
    color: 'white',

    zIndex: '1',

    transition: '.2s',
}

export const card_in_hands =
{
    position: 'relative',

    _hover: {
        transform: 'translateY(-1rem)',
        '~.card': {
            transform: { base: 'translateX(1.5rem)', md: 'translateX(4rem)', lg: 'translateX(7rem)' },
        },
    },

    _notFirst: {
        marginLeft: { base: '-1.5rem', md: '-4rem', lg: '-4vw' },
    }
}

export const card_in_hands_dragging =
{
    position: 'relative',

    _notFirst: {
        marginLeft: { base: '-1.5rem', md: '-4rem', lg: '-4vw' },
    }
}

export const card_in_hands_selected =
{

    transform: 'translateY(-2rem)',

    _notFirst: {
        marginLeft: { base: '-1.5rem', md: '-4rem', lg: '-4vw' },
    }
}

export const card_stack =
{
    position: 'relative',

    _hover: {
        transform: 'translateY(1rem)',
        '~.card': {
            transform: { base: 'translateY(1.5rem)', md: 'translateY(4rem)', lg: 'translateY(7rem)' },
        },
    },

    _notFirst: {
        marginTop: { base: '-85px', sm: '-7rem', md: '-11rem', lg: '-21vh' },
    }
}

export const card_stack_dragging =
{
    position: 'relative',

    _hover: {
        transform: 'translateY(1rem)',
        '~.card': {
            transform: { base: 'translateY(1.5rem)', md: 'translateY(4rem)', lg: 'translateY(7rem)' },
        },
    },

    _notFirst: {
        marginTop: { base: '-85px', sm: '-7rem', md: '-11rem', lg: '-21vh' },
    }
}

export const card_stack_selected =
{
    transform: 'rotate(20deg)',

    _notFirst: {
        marginTop: { base: '-85px', sm: '-7rem', md: '-11rem', lg: '-21vh' },
    }
}

export const card_field =
{
    position: 'relative',

    _notFirst: {
        marginLeft: { base: '-1rem', md: '-3rem', lg: '1rem' },
    }
}

export const card_number__top =
{
    paddingTop: { base: '3px', md: '5px', lg: '5px' },
    fontFamily: 'Kanit',
    fontSize: { base: '1.5rem', md: '3rem', lg: '6vh' },
    lineHeight: { base: '1.5rem', md: '3rem', lg: '6vh' },
}

export const card_number__bottom =
{
    ...card_number__top,
    transform: 'rotate(-180deg)',
}

export const card__symbol =
{
    fontSize: { base: '1.5rem', md: '3rem', lg: '6vh' },
    color: '#DBC964'
}