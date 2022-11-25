import { ReactNode } from 'react'

export interface card_props {
    _id: string;
    _number: number;
    _color: string;
    _isFront: boolean;
    _displayType: string;
    _idx: number;
    _isDraggable: boolean;
}

export interface cardsInHands_props {
    _cards: Array<card_obj>;
}

export interface cardsField_props {
    _cards: Array<card_obj>;
}

export interface cardsStacks_props {
    _cards: Array<Array<card_obj>>;
}

export interface header_props {
    children: ReactNode
}

export interface tableButtons_props {
    children: ReactNode
}

export interface card_obj {
    _id: string;
    number: number;
    color: string;
    isFront: boolean;
}