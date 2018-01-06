/** @license MIT */
export default class RapidI18n {
    /**
     * Sets the dictionary to be used while searching for texts.
     * @param {Object} texts
     */
    static setTexts(texts) {
        RapidI18n.texts = texts
    }

    /**
     * @return {Object|undefined}
     */
    static getTexts() {
        return RapidI18n.texts
    }
}

/**
 * Attempts to find the text with given name, and replace its variables with
 * provided ones.
 *
 * @param {String} name
 * @param {Object|Array} replacements
 * @return {String} translated text or an empty string
 */
export function t(name, replacements) {
    let sections = name.split('.')
    let section = RapidI18n.texts

    for (let sectionName of sections) {
        section = section[sectionName]
    }

    return maybe(replaceVariables(section, replacements), '')
}

/**
 * If `replacements` is an array:
 *   Replaces all occurances of `{n}` in given text with the value from
 *   the array, where n the index of a value.
 *
 * If `replacements` is an object:
 *   Replaces all occurances of `{key}` in given text with the value associated
 *   with that key in the object.
 *
 * Example:
 *   replaceVariables('Hello, {foo}!', {foo: 'world'}) will become: Hello, world!
 *   replaceVariables('Hello, {0}!', ['world']) will become: Hello, world!
 *
 * @param {String} text
 * @param {Object|Array} replacements
 * @return {String}
 */
function replaceVariables(text, replacements) {
    if (Array.isArray(replacements)) {
        for (let i = 0; i < replacements.length; i++) {
            text = text.replace(new RegExp('\\{' + i + '\\}', 'g'), replacements[i])
        }
    } else {
        if (typeof replacements === 'object') {
            for ([name, value] of Object.entries(replacements)) {
                text = text.replace(new RegExp('{' + name + '}', 'g'), value)
            }
        }
    }

    return text
}

/**
 * Returns `defaultValue` if `value` is undefined.
 */
function maybe(value, defaultValue) {
    if (value == undefined) {
        return defaultValue
    }

    return value
}