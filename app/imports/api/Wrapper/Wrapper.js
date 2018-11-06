import * as _ from 'meteor/underscore';
import { Events } from '/imports/api/Events/Events';
import { Locations } from '/imports/api/Locations/Locations';
import { Buildings } from '/imports/api/Buildings/Buildings';
import { Events } from '/imports/api/Events/Events';

/*
  We need to fetch data for three types of charts: Composition, Comparison, and Transition.
  We will assume that Composition charts are Bar charts, Comparison chart
*/

/**
 * Returns a Cursor pointer to the specified collection.
 * @param collection the collection to retrieve a Cursor pointer from.
 * @returns {*} a Cursor pointer to the specified collection.
 */
function getCollection(collection) {
  return collection.find({});
}

/**
 * Returns the Location names.
 * @param index By default, index is -1. This indicates that we want to return ALL Location names. This default value can be invoked in the Front-End side, by simply doing getLocationNames() without any parameters supplied.
 * @returns {*} either ALL Location names or the Location name at index position.
 */
export function getLocationNames(index = -1) {
  let result = [];
  const cursor = getCollection(Locations);
  /* Iterate over the Cursor and get the document's 'name' values. */
  cursor.forEach((doc) => result.push(doc.name));
  if (index === -1) {
    return result;
  }
  return result[index];
}
/**
 * Returns the Building names.
 * @param index By default, index is -1. This indicates that we want to return ALL Building names. This default value can be invoked in the Front-End side, by simply doing getBuildingNames() without any parameters supplied.
 * @returns {*} either ALL Building names or the Building name at index position.
 */
export function getBuildingNames(index = -1) {
  let result = [];
  const cursor = getCollection(Buildings);
  /* Iterate over the Cursor and get the document's 'name' values. */
  cursor.forEach((doc) => result.push(doc.name));
  if (index === -1) {
    return result;
  }
  return result[index];
}
/**
 * Returns the Event names.
 * @param index By default, index is -1. This indicates that we want to return ALL Event names. This default value can be invoked in the Front-End side, by simply doing getEventNames() without any parameters supplied.
 * @returns {*} either ALL Event names or the Event name at index position.
 */
export function getEventNames(index = -1) {
  let result = [];
  const cursor = getCollection(Events);
  /* Iterate over the Cursor and get the document's 'name' values. */
  cursor.forEach((doc) => result.push(doc.name));
  if (index === -1) {
    return result;
  }
  return result[index];
}

export function addNewLocation(name, street, city, state, zip_code) {
  if ()
}

/**
 *
 * @param study_id
 * @param location
 * @param buildings
 * @param startDate
 * @param endDate
 * @param weight Boolean - if this is true then we get data by weight. Otherwise, by volume.
 * @returns {*}
 */
export function getTransitionDataByWeight(study_id, location, buildings, startDate, endDate, weight, trashType) {
  const eventsByDate = getEventsByDate(startDate, endDate);
  const eventsByLocation = getEventsByLocation(eventsByDate);
  const eventsByBuilding = getEventsByBuilding(eventsByLocation, buildings);
  const data = getData();
  return data;
}

/**
 * Returns Events within the range of startDate and endDate, inclusive.
 * If the study is ongoing (i.e. 2017 - current), endDate is handled by just fetching all events from startDate.
 */
function getEventsByDate(startDate, endDate) {
  if (endDate === undefined) {
    return Events.find();
  }
  return Events.find();
}

function getEventsByLocation(events) {
  console.log("getEventsByLocations Not yet implemented")
}

/**
 *  Returns Events by building.
 *  If buildings is undefined, it means that we will sum the value of ALL buildings
 */
function getEventsByBuilding(events, buildings) {
  return _.filter(events, (event) => event);
}

function getData(events, trashType, weight) {
  return _.chain(events)
      .pluck(trashType)
      .reduce((memo, num) => memo + num)
      .value();
}

