var moment = require('moment')
var rp = require('request-promise')

function getDesignation(now) {
    return rp("https://www.dom.com/api/smart-pricing/years/" +
    now.format("YYYY") + "/months/" + now.format("MMMM") + "?useEvents=true")
        .then(function (data) {
            data = JSON.parse(data)
            var cleanData = {}
            data.weeks.forEach(function (obj) {
                obj.days.forEach(function (obj) {
                    if (obj.day != "") {
                        cleanData[obj.day] = obj.designation
                    }
                })
            })

            return {designation: cleanData[now.format("D")]}
        })
}


/**
 * Status for today
 *
 * @returns {Promise}
 */
var today = function () {
    return inDays()
}


/**
 * Status for tomorrow
 *
 * @returns {Promise}
 */
var tomorrow = function () {
    return inDays(1)
}


/**
 * Gets the status for n number of days away
 *
 * @param {String|int} days can be negative
 * @returns {Promise}
 */
var inDays = function (days) {
    var now = moment()
    now.add(days, "days")
    return getDesignation(now)
}


/**
 * Gets the status for based on date
 *
 * @param {Date} date
 * @returns {Promise}
 */
var onDate = function (date) {
    return getDesignation(moment(date))
}

module.exports = {
    today: today,
    tomorrow: tomorrow,
    inDays: inDays,
    onDate: onDate
}


