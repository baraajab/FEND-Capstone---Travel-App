/**
 * @jest-environment jsdom
 */

const { handleSubmit } = require("../js/handleSubmit")

describe('handleSubmit', ()=> {
    it('returns something', () => {
        expect(handleSubmit).toBeDefined();
    })
})
