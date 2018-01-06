/** @license MIT */
const assert = require('assert')
const RapidI18n = require('../src/RapidI18n').default
const t = require('../src/RapidI18n').t

RapidI18n.setTexts({
    foo: 'bar',
    section: {
        value: 'bar'
    },
    var1: 'Hello, {name}!',
    var2: 'Hello, {0}!'
})

describe('RapidI18n', () => {
    it('should return correct sentence', () => {
        assert.equal(t('foo'), 'bar')
    })

    it('should return correct sentence from a section', () => {
        assert.equal(t('section.value'), 'bar')
    })

    it('should return empty string if section does not exist', () => {
        assert.equal(t('invalidSection'), '')
    })

    it('should replace variables in the translation when given an object', () => {
        assert.equal(t('var1', {name: 'world'}), 'Hello, world!')
    })

    it('should replace variables in the translation when given an array', () => {
        assert.equal(t('var2', ['world']), 'Hello, world!')
    })
})