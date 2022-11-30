import { ReactNode } from 'react'

export interface card_props {
    _id: string;
    _number: number;
    _color: string;
    _isFront: boolean;
    _displayType: string;
    _idx: number;
    _isDraggable: boolean;
    _clickedCard?: ( id: string, idx: number,  _displayType: string ) => void;
}

export interface cardsInHands_props {
    _cards: Array<card_obj>;
    _clickedCard: ( id: string,  idx: number, _displayType: string ) => void;
}

export interface cardsField_props {
    _cards: Array<card_obj>;
}

export interface cardsStacks_props {
    _cards: Array<Array<card_obj>>;
    _clickedCard?: ( id: string,  idx: number, _displayType: string ) => void;
    _isDropDisabled: boolean;
    _isDraggable: boolean;
}

export interface header_props {
    children: ReactNode
}

export interface tableButtons_props {
    children: ReactNode;
    _clickedPass: ( btn_type: string ) => void;
    _clickedPlace: ( btn_type: string ) => void;
}

export interface PlaceBtn_props {
    _clickedPlace?: ( btn_type: string ) => void;
}

export interface PassBtn_props {
    _clickedPass?: ( btn_type: string ) => void;
}

export interface FieldContainer_props {
    children: ReactNode;
    _opponentsStack: Array<Array<card_obj>>;
}

export interface OpponentsStackModal_props {
    children: ReactNode;
    _opponentsStack: Array<Array<card_obj>>;
}

export interface card_obj {
    _id: string;
    number: number;
    color: string;
    isFront: boolean;
    place: string;
}