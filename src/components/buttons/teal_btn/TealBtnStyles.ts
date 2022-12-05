export const teal_btn_text =
{
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: { base: '1rem', md: '1rem', lg: '1.5rem' },
    lineHeight: { base: '1rem', md: '1rem', lg: '1.5rem' },

    display: 'flex',
    alignItems: 'center',

    color: '#48CAE4',

    textShadow: '0px -10px 40px #14B5E8, 0px -5px 100px #0096C7, 0px 10px 40px #14B5E8',
}

export const teal_btn_styles =
{

    margin: '1rem',

    paddingX: '1.5rem',
    paddingY: '1rem',


    border: '1px solid #6CBFD04D',
    borderRadius: '15px',


    background: 'linear-gradient(135deg, #373646 0%, #313040 100%)',
    boxShadow: '-1px 1px 2px rgba(21, 20, 27, 0.2), 1px -1px 2px rgba(21, 20, 27, 0.2), -1px -1px 2px rgba(83, 82, 107, 0.9), 1px 1px 3px rgba(21, 20, 27, 0.9), inset 1px 1px 2px rgba(83, 82, 107, 0.3), inset -1px -1px 2px rgba(21, 20, 27, 0.5)',
    backdropFilter: 'blur(11.5px)',

    cursor: 'pointer',

    transition: '.2s',

    _hover: {
        background: 'linear-gradient(135deg, #373646 0%, #313040 100%)',
    },

    _active: {
        boxShadow: '1px 1px 2px rgba(83, 82, 107, 0.3), -1px -1px 2px rgba(21, 20, 27, 0.5), inset -1px 1px 2px rgba(21, 20, 27, 0.2), inset 1px -1px 2px rgba(21, 20, 27, 0.2), inset -1px -1px 2px rgba(83, 82, 107, 0.9), inset 1px 1px 3px rgba(21, 20, 27, 0.9)',
    },

    ...teal_btn_text,
}