/**
 * Validation schema
 * @type {object}
 */
const validation = {
    type: 'object',
    required: ['email'],
    additionalProperties: false,
    properties: {
        email: {
            type: 'string',
            format: 'email',
        },
    },
}

export default {
    validation,
};