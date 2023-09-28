/**
 * Validation schema
 * @type {object}
 */
const validation = {
    oneOf: [
        {
            type: 'object',
            additionalProperties: false,
            required: [
                'formType',
                'firstName',
                'lastName',
                'email',
                'hearAboutUs',
                'contactedBy',
                'message',
            ],
            properties: {
                formType: {
                    type: 'string',
                    enum: ['general'],
                },
                firstName: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                hearAboutUs: {
                    type: 'string',
                },
                contactedBy: {
                    type: 'string',
                    enum: ['As Individual User', 'As Company']
                },
                company: {
                    type: 'string',
                },
                companyAddress: {
                    type: 'string',
                },
                country: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                zipCode: {
                    type: 'string',
                },
                registrationId: {
                    type: 'string',
                },
                vatId: {
                    type: 'string',
                },
                companyEmail: {
                    type: 'string',
                    format: 'email',
                },
                phoneNumber: {
                    type: 'string',
                },
                message: {
                    type: 'string',
                    maxLength: 960,
                },
            },
            if: {
                properties: {
                    contactedBy: {
                        enum: [
                            'As Company'
                        ]
                    }
                }
            },
            then: {
                required: [
                    'company',
                    'companyAddress',
                    'country',
                    'city',
                    'zipCode',
                ]
            }
        },
        {
            type: 'object',
            additionalProperties: false,
            required: [
                'formType',
                'firstName',
                'lastName',
                'email',
                'hearAboutUs',
                'contactedBy',
            ],
            properties: {
                formType: {
                    type: 'string',
                    enum: ['hosting'],
                },
                firstName: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                hearAboutUs: {
                    type: 'string',
                },
                contactedBy: {
                    type: 'string',
                    enum: ['As Individual User', 'As Company']
                },
                company: {
                    type: 'string',
                },
                companyAddress: {
                    type: 'string',
                },
                country: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                zipCode: {
                    type: 'string',
                },
                registrationId: {
                    type: 'string',
                },
                vatId: {
                    type: 'string',
                },
                companyEmail: {
                    type: 'string',
                    format: 'email',
                },
                phoneNumber: {
                    type: 'string',
                },
                miningHardware: {
                    type: 'array',
                    anyOf: [
                        {
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                    label: {
                                        enum: [
                                            'Antminer T9+',
                                            'Bitmain Antminer S5',
                                            'DragonMint T1',
                                            'WhatsMiner M32-62T',
                                            'Antminer S17 Pro (50Th)',
                                            'Antminer S17 Pro (53Th)',
                                            'Antminer S17+ (73Th)',
                                            'Antminer S17 (53Th)',
                                            'Antminer S17 (56Th)',
                                            'Antminer S17e (64Th)',
                                            'Antminer S19 XP Hyd (255Th)',
                                            'Antminer S19 XP (140Th)',
                                            'Antminer S19 Pro+ Hyd (198Th)',
                                            'Antminer S19j Pro (96Th)',
                                            'Antminer S19j Pro (104Th)',
                                            'Antminer S19 Pro (110Th)',
                                            'Antminer S19 Pro Hyd (177Th)',
                                            'Antminer S19j Pro (100Th)',
                                            'Antminer S19 (95Th)',
                                            'Antminer S19j (90Th)',
                                            'Antminer S19 Hydro (158Th)Whatsminer M50S',
                                            'Whatsminer M50',
                                            'Whatsminer M30S++',
                                            'Whatsminer M30S+',
                                            'Whatsminer M30S',
                                            'Whatsminer M21',
                                            'Whatsminer M31S+',
                                            'Whatsminer M31S',
                                            'Whatsminer M10',
                                            'Whatsminer M20S',
                                            'Whatsminer M32S',
                                            'Whatsminer M32',
                                            'Whatsminer M3',
                                            'Whatsminer M3X',
                                            'Whatsminer M21S',
                                            'Whatsminer M10S',
                                            'AvalonMiner 1246',
                                            'AvalonMiner 1166 Pro',
                                            'AvalonMiner 1047',
                                            'AvalonMiner 1146 Pro',
                                            'AvalonMiner 1126 Pro',
                                            'AvalonMiner 1066',
                                        ],
                                    },
                                    quantity: {
                                        type: 'number',
                                        minimum: 1,
                                    },
                                    value: {
                                        enum: [
                                            'antminert9+',
                                            'bitmainantminers5',
                                            'dragonmintt1',
                                            'whatsminerm32-62t',
                                            'antminers17pro(50th)',
                                            'antminers17pro(53th)',
                                            'antminers17+(73th)',
                                            'antminers17(53th)',
                                            'antminers17(56th)',
                                            'antminers17e(64th)',
                                            'antminers19xphyd(255th)',
                                            'antminers19xp(140th)',
                                            'antminers19pro+hyd(198th)',
                                            'antminers19jpro(96th)',
                                            'antminers19jpro(104th)',
                                            'antminers19pro(110th)',
                                            'antminers19prohyd(177th)',
                                            'antminers19jpro(100th)',
                                            'antminers19(95th)',
                                            'antminers19j(90th)',
                                            'antminers19hydro(158th)whatsminerm50s',
                                            'whatsminerm50',
                                            'whatsminerm30s++',
                                            'whatsminerm30s+',
                                            'whatsminerm30s',
                                            'whatsminerm21',
                                            'whatsminerm31s+',
                                            'whatsminerm31s',
                                            'whatsminerm10',
                                            'whatsminerm20s',
                                            'whatsminerm32s',
                                            'whatsminerm32',
                                            'whatsminerm3',
                                            'whatsminerm3x',
                                            'whatsminerm21s',
                                            'whatsminerm10s',
                                            'avalonminer1246',
                                            'avalonminer1166pro',
                                            'avalonminer1047',
                                            'avalonminer1146pro',
                                            'avalonminer1126pro',
                                            'avalonminer1066',
                                        ],
                                    },
                                }
                            }
                        },
                        {
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                    label: {
                                        type: 'string',
                                    },
                                    quantity: {
                                        type: 'number',
                                        minimum: 1,
                                    },
                                    value: {
                                        type: 'string',
                                    },
                                }
                            }
                        }
                    ],

                },
                message: {
                    type: 'string',
                    maxLength: 960,
                },
            },
            if: {
                properties: {
                    contactedBy: {
                        enum: [
                            'As Company'
                        ]
                    }
                }
            },
            then: {
                required: [
                    'company',
                    'companyAddress',
                    'country',
                    'city',
                    'zipCode',
                ]
            },
        },
        {
            type: 'object',
            additionalProperties: false,
            required: [
                'formType',
                'firstName',
                'lastName',
                'email',
                'hearAboutUs',
                'contactedBy',
                'privateEquity',
                'investmentValue',
            ],
            properties: {
                formType: {
                    type: 'string',
                    enum: ['investment'],
                },
                firstName: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                hearAboutUs: {
                    type: 'string',
                },
                contactedBy: {
                    type: 'string',
                    enum: ['As Individual User', 'As Company']
                },
                company: {
                    type: 'string',
                },
                companyAddress: {
                    type: 'string',
                },
                country: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                zipCode: {
                    type: 'string',
                },
                registrationId: {
                    type: 'string',
                },
                vatId: {
                    type: 'string',
                },
                companyEmail: {
                    type: 'string',
                    format: 'email',
                },
                phoneNumber: {
                    type: 'string',
                },
                privateEquity: {
                    type: 'string',
                },
                investmentValue: {
                    type: 'string',
                },
                businessGoalsMessage: {
                    type: 'string',
                    maxLength: 960,
                },
                message: {
                    type: 'string',
                    maxLength: 960,
                },
            },
            if: {
                properties: {
                    contactedBy: {
                        enum: [
                            'As Company'
                        ]
                    }
                }
            },
            then: {
                required: [
                    'company',
                    'companyAddress',
                    'country',
                    'city',
                    'zipCode',
                ]
            },
        },
        {
            type: 'object',
            additionalProperties: false,
            required: [
                'formType',
                'firstName',
                'lastName',
                'email',
                'hearAboutUs',
                'contactedBy',
                'sustainableEnergySource',
                'electricalCapacity',
            ],
            properties: {
                formType: {
                    type: 'string',
                    enum: ['sustainable-energy'],
                },
                firstName: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                hearAboutUs: {
                    type: 'string',
                },
                contactedBy: {
                    type: 'string',
                    enum: ['As Individual User', 'As Company']
                },
                company: {
                    type: 'string',
                },
                companyAddress: {
                    type: 'string',
                },
                country: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                zipCode: {
                    type: 'string',
                },
                registrationId: {
                    type: 'string',
                },
                vatId: {
                    type: 'string',
                },
                companyEmail: {
                    type: 'string',
                    format: 'email',
                },
                phoneNumber: {
                    type: 'string',
                },
                sustainableEnergySource: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                electricalCapacity: {
                    type: 'string',
                },
                businessGoalsMessage: {
                    type: 'string',
                    maxLength: 960,
                },
                message: {
                    type: 'string',
                    maxLength: 960,
                },
            },
            if: {
                properties: {
                    contactedBy: {
                        enum: [
                            'As Company'
                        ]
                    }
                }
            },
            then: {
                required: [
                    'company',
                    'companyAddress',
                    'country',
                    'city',
                    'zipCode',
                ]
            },
        },
        {
            type: 'object',
            additionalProperties: false,
            required: [
                'formType',
                'firstName',
                'lastName',
                'email',
                'hearAboutUs',
                'contactedBy',
                'locationType',
                'dataCenterCountry',
                'dataCenterCity',
                'dataCenterZip',
                'energySource',
                'electricalCapacity',
                'listingType',
            ],
            properties: {
                formType: {
                    type: 'string',
                    enum: ['data-center-location'],
                },
                firstName: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                hearAboutUs: {
                    type: 'string',
                },
                contactedBy: {
                    type: 'string',
                    enum: ['As Individual User', 'As Company']
                },
                company: {
                    type: 'string',
                },
                companyAddress: {
                    type: 'string',
                },
                country: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                zipCode: {
                    type: 'string',
                },
                registrationId: {
                    type: 'string',
                },
                vatId: {
                    type: 'string',
                },
                companyEmail: {
                    type: 'string',
                    format: 'email',
                },
                phoneNumber: {
                    type: 'string',
                },
                locationType: {
                    type: 'string',
                },
                dataCenterCountry: {
                    type: 'string',
                },
                dataCenterCity: {
                    type: 'string',
                },
                dataCenterZip: {
                    type: 'string',
                },
                dataCenterAddress: {
                    type: 'string',
                },
                longitude: {
                    type: 'string',
                },
                latitude: {
                    type: 'string',
                },
                energySource: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                electricalCapacity: {
                    type: 'string',
                },
                listingType: {
                    type: 'string',
                },
                locationOffer: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                businessGoalsMessage: {
                    type: 'string',
                    maxLength: 960,
                },
                message: {
                    type: 'string',
                    maxLength: 960,
                },
            },
            if: {
                properties: {
                    contactedBy: {
                        enum: [
                            'As Company'
                        ]
                    }
                }
            },
            then: {
                required: [
                    'company',
                    'companyAddress',
                    'country',
                    'city',
                    'zipCode',
                ]
            },
        },
        {
            type: 'object',
            additionalProperties: false,
            required: [
                'formType',
                'firstName',
                'lastName',
                'email',
                'hearAboutUs',
                'contactedBy',
                'idea',
            ],
            properties: {
                formType: {
                    type: 'string',
                    enum: ['funding'],
                },
                firstName: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                hearAboutUs: {
                    type: 'string',
                },
                contactedBy: {
                    type: 'string',
                    enum: ['As Individual User', 'As Company']
                },
                company: {
                    type: 'string',
                },
                companyAddress: {
                    type: 'string',
                },
                country: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                zipCode: {
                    type: 'string',
                },
                registrationId: {
                    type: 'string',
                },
                vatId: {
                    type: 'string',
                },
                companyEmail: {
                    type: 'string',
                    format: 'email',
                },
                phoneNumber: {
                    type: 'string',
                },
                idea: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                businessGoalsMessage: {
                    type: 'string',
                    maxLength: 960,
                },
                message: {
                    type: 'string',
                    maxLength: 960,
                },
            },
            if: {
                properties: {
                    contactedBy: {
                        enum: [
                            'As Company'
                        ]
                    }
                }
            },
            then: {
                required: [
                    'company',
                    'companyAddress',
                    'country',
                    'city',
                    'zipCode',
                ]
            },
        },
        {
            type: 'object',
            additionalProperties: false,
            required: [
                'formType',
                'firstName',
                'lastName',
                'email',
                'hearAboutUs',
                'contactedBy',
                'auditNature',
            ],
            properties: {
                formType: {
                    type: 'string',
                    enum: ['technical-audit'],
                },
                firstName: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                hearAboutUs: {
                    type: 'string',
                },
                contactedBy: {
                    type: 'string',
                    enum: ['As Individual User', 'As Company']
                },
                company: {
                    type: 'string',
                },
                companyAddress: {
                    type: 'string',
                },
                country: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                zipCode: {
                    type: 'string',
                },
                registrationId: {
                    type: 'string',
                },
                vatId: {
                    type: 'string',
                },
                companyEmail: {
                    type: 'string',
                    format: 'email',
                },
                phoneNumber: {
                    type: 'string',
                },
                auditNature: {
                    type: 'string',
                    enum: [
                        'I want my data center to join the Prosperity Digital\'s business network',
                        'I want my data center\'s infrastructure to be audited',
                        'I would like to understand the technical overlap with other data center industry segments',
                        'I would like to understand the technical compatibility',
                        'I want to compare actual asset value',
                        'Other'
                    ]
                },
                reasonForJoining: {
                    type: 'string',
                },
                dataCenterLayers: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                businessGoalsMessage: {
                    type: 'string',
                    maxLength: 960,
                },
                message: {
                    type: 'string',
                    maxLength: 960,
                },
            },
            allOf: [
                {
                    if: {
                        properties: {
                            auditNature: {
                                enum: [
                                    'I want my data center to join the Prosperity Digital\'s business network',
                                ]
                            }
                        }
                    },
                    then: {
                        required: [
                            'reasonForJoining',
                        ],
                    },
                },
                {
                    if: {
                        properties: {
                            auditNature: {
                                enum: [
                                    'I want my data center\'s infastructure to be audited',
                                ]
                            }
                        }
                    },
                    then: {
                        required: [
                            'dataCenterLayers',
                        ],
                    },
                },
                {
                    if: {
                        properties: {
                            contactedBy: {
                                enum: [
                                    'As Company'
                                ]
                            }
                        }
                    },
                    then: {
                        required: [
                            'company',
                            'companyAddress',
                            'country',
                            'city',
                            'zipCode',
                        ]
                    },
                },
            ],

        }
    ]
}

export default {
    validation,
};