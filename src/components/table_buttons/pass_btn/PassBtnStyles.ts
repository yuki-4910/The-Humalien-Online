export const pass_btn_text =
{
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: { base: '1rem', md: '1rem', lg: '1.5rem' },
    lineHeight: { base: '1rem', md: '1rem', lg: '1.5rem' },

    display: 'flex',
    alignItems: 'center',

    color: '#8338EC',

    textShadow: '0px -10px 25px #6A00FF, 0px -5px 50px #591F7D, 0px 10px 25px #6A00FF',
}

export const pass_btn_styles =
{

    margin: '1rem',

    paddingX: '1.5rem',
    paddingY: '1rem',


    border: '1px solid #8338EC4D',


    background: 'linear-gradient(135deg, #373646 0%, #313040 100%)',
    boxShadow: '-1px 1px 2px rgba(21, 20, 27, 0.2), 1px -1px 2px rgba(21, 20, 27, 0.2), -1px -1px 2px rgba(83, 82, 107, 0.9), 1px 1px 3px rgba(21, 20, 27, 0.9), inset 1px 1px 2px rgba(83, 82, 107, 0.3), inset -1px -1px 2px rgba(21, 20, 27, 0.5)',
    backdropFilter: 'blur(11.5px)',

    borderRadius: '15px',

    cursor: 'pointer',

    transition: '.2s',

    _hover: {
        background: 'linear-gradient(135deg, #373646 0%, #313040 100%)',
    },

    _active: {
        boxShadow: '1px 1px 2px rgba(83, 82, 107, 0.3), -1px -1px 2px rgba(21, 20, 27, 0.5), inset -1px 1px 2px rgba(21, 20, 27, 0.2), inset 1px -1px 2px rgba(21, 20, 27, 0.2), inset -1px -1px 2px rgba(83, 82, 107, 0.9), inset 1px 1px 3px rgba(21, 20, 27, 0.9)',
    },

    ...pass_btn_text,
}