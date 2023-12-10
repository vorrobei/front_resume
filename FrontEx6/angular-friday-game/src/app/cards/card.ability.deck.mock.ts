import { CardAbilityAction1xBelowThePile, CardAbilityAction1xDestroy, CardAbilityAction1xDouble, CardAbilityAction1xExchange, CardAbilityAction2xExchange, 
    CardAbilityActionAdd1Cards, CardAbilityActionAdd2Cards, CardAbilityActionCopy, CardAbilityActionPhaseLess, CardAbilityActionSort3Card, CardAbilityAdd1Life, 
        CardAbilityAdd2Life, ICardAbility } from "./card.ability";

export const AbilityCards: Array<ICardAbility> = [
        { 
            id: 101, 
            name: 'distracted', 
            abilityValue: -1, 
            ability: null,
            discardCost: 1
        },
        { 
            id: 102, 
            name: 'distracted', 
            abilityValue: -1, 
            ability: null,
            discardCost: 1
        },
        { 
            id: 103, 
            name: 'distracted', 
            abilityValue: -1, 
            ability: null,
            discardCost: 1
        },
        { 
            id: 104, 
            name: 'distracted', 
            abilityValue: -1, 
            ability: null,
            discardCost: 1
        },
        { 
            id: 105, 
            name: 'distracted', 
            abilityValue: -1, 
            ability: null,
            discardCost: 1
        },                     
        { 
            id: 106, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        },       
        { 
            id: 107, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        }, 
        { 
            id: 108, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        }, 
        { 
            id: 109, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        }, 
        { 
            id: 110, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        }, 
        { 
            id: 111, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        }, 
        { 
            id: 112, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        },          
        { 
            id: 113, 
            name: 'weak', 
            abilityValue: 0, 
            ability: null,
            discardCost: 1
        },                                                     
        { 
            id: 114, 
            name: 'eating', 
            abilityValue: 0, 
            ability: new CardAbilityAdd2Life(),
            discardCost: 1
        },            
        { 
            id: 115, 
            name: 'focused', 
            abilityValue: 1, 
            ability: null,
            discardCost: 1
        },          
        { 
            id: 116, 
            name: 'focused', 
            abilityValue: 1, 
            ability: null,
            discardCost: 1
        },         
        { 
            id: 117, 
            name: 'focused', 
            abilityValue: 1, 
            ability: null,
            discardCost: 1
        },                           
        { 
            id: 118, 
            name: 'genius', 
            abilityValue: 2, 
            ability: null,
            discardCost: 1
        },   
        { 
            id: 201, 
            name: 'mimicry', 
            abilityValue: 0, 
            ability: new CardAbilityActionCopy(),
            discardCost: 1
        },
        { 
            id: 202, 
            name: 'deception', 
            abilityValue: 0, 
            ability: new CardAbilityAction1xBelowThePile(),
            discardCost: 1
        },        
        { 
            id: 203, 
            name: 'realization', 
            abilityValue: 0, 
            ability: new CardAbilityAction1xBelowThePile(),
            discardCost: 1
        },           
        { 
            id: 204, 
            name: 'books', 
            abilityValue: 0, 
            ability: new CardAbilityActionPhaseLess(),
            discardCost: 1
        },            
        { 
            id: 205, 
            name: 'food', 
            abilityValue: 0, 
            ability: new CardAbilityAdd1Life(),
            discardCost: 1
        },  
        { 
            id: 206, 
            name: 'food', 
            abilityValue: 0, 
            ability: new CardAbilityAdd1Life(),
            discardCost: 1            
        },                
        { 
            id: 207, 
            name: 'equipment', 
            abilityValue: 0, 
            ability: new CardAbilityActionAdd2Cards(),
            discardCost: 1
        },  
        { 
            id: 208, 
            name: 'equipment', 
            abilityValue: 0, 
            ability: new CardAbilityActionAdd2Cards(),
            discardCost: 1
        },   
        { 
            id: 209, 
            name: 'strategy', 
            abilityValue: 0, 
            ability: new CardAbilityAction2xExchange(),
            discardCost: 1
        },  
        { 
            id: 210, 
            name: 'strategy', 
            abilityValue: 0, 
            ability: new CardAbilityAction2xExchange(),
            discardCost: 1
        },                 
        { 
            id: 211, 
            name: 'deception', 
            abilityValue: 1, 
            ability: new CardAbilityAction1xBelowThePile(),
            discardCost: 1
        },     
        { 
            id: 212, 
            name: 'mimicry', 
            abilityValue: 1, 
            ability: new CardAbilityActionCopy(),
            discardCost: 1
        },     
        { 
            id: 213, 
            name: 'realization', 
            abilityValue: 1, 
            ability: new CardAbilityAction1xDestroy(),
            discardCost: 1
        },     
        { 
            id: 214, 
            name: 'repeat', 
            abilityValue: 1, 
            ability: new CardAbilityAction1xDouble(),
            discardCost: 1
        },     
        { 
            id: 215, 
            name: 'food', 
            abilityValue: 1, 
            ability: new CardAbilityAdd1Life(),
            discardCost: 1
        },     
        { 
            id: 216, 
            name: 'food', 
            abilityValue: 1, 
            ability: new CardAbilityAdd1Life(),
            discardCost: 1
        },                 
        { 
            id: 217, 
            name: 'weapon', 
            abilityValue: 2, 
            ability: null,
            discardCost: 1
        },     
        { 
            id: 218, 
            name: 'weapon', 
            abilityValue: 2, 
            ability: null,
            discardCost: 1
        },                    
        { 
            id: 219, 
            name: 'strategy', 
            abilityValue: 2, 
            ability: new CardAbilityAction1xExchange(),
            discardCost: 1
        },         
        { 
            id: 220, 
            name: 'repeat', 
            abilityValue: 2, 
            ability: new CardAbilityAction1xDouble(),
            discardCost: 1
        },     
        { 
            id: 221, 
            name: 'realization', 
            abilityValue: 2, 
            ability: new CardAbilityAction1xDestroy(),
            discardCost: 1
        },    
        { 
            id: 222, 
            name: 'food', 
            abilityValue: 2, 
            ability: new CardAbilityAdd1Life(),
            discardCost: 1
        },                                
        { 
            id: 223, 
            name: 'experience', 
            abilityValue: 2, 
            ability: new CardAbilityActionAdd1Cards(),
            discardCost: 1
        },                                
        { 
            id: 224, 
            name: 'vision', 
            abilityValue: 2, 
            ability: new CardAbilityActionSort3Card(),
            discardCost: 1
        },  
        { 
            id: 225, 
            name: 'realization', 
            abilityValue: 3, 
            ability: new CardAbilityAction1xDestroy(),
            discardCost: 1
        },    
        { 
            id: 226, 
            name: 'strategy', 
            abilityValue: 3, 
            ability: new CardAbilityAction1xExchange(),
            discardCost: 1
        },                                
        { 
            id: 227, 
            name: 'experience', 
            abilityValue: 3, 
            ability: new CardAbilityActionAdd1Cards(),
            discardCost: 1
        },                                
        { 
            id: 228, 
            name: 'vision', 
            abilityValue: 3, 
            ability: new CardAbilityActionSort3Card(),
            discardCost: 1
        },          
        { 
            id: 229, 
            name: 'weapon', 
            abilityValue: 4, 
            ability: null,
            discardCost: 1
        },     
        { 
            id: 230, 
            name: 'weapon', 
            abilityValue: 4, 
            ability: null,
            discardCost: 1
        },  
    ]