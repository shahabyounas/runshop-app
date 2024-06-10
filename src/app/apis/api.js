import { API_URL, API_V1 } from "../../utils/commons";
import { format } from "../../utils/datetime";

const BASE_URL = `${API_URL}${API_V1}`;

export {
  fetchData,
  getBets,
  getIndividualFixtures,
  getMarkets,
  getModels,
  getParticipantFixtures,
  getTraders,
};

async function fetchData(resource, ...params) {
  try {
    const resp = await fetch(`${BASE_URL}${resource}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBets(req, res) {
  try {
    const resp = await fetchData(`/bets`);
    const _data = resp.data.map((d) => ({
      ...d,
      id: d._id,
      bet_time: format(d.bet_time),
    }));

    return _data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getIndividualFixtures(req, res) {
  try {
    const resp = await fetchData(`/individualfixtures`);
    const _data = resp.data.map((d) => ({
      ...d,
      id: d._id,
    }));

    return _data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getMarkets(req, res) {
  try {
    const resp = await fetchData(`/markets`);
    const _data = resp.data.map((d) => ({
      ...d,
      id: d._id,
    }));

    return _data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getModels(req, res) {
  try {
    const resp = await fetchData(`/models`);
    const _data = resp.data.map((d) => ({
      ...d,
      id: d._id,
    }));

    return _data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getTraders(req, res) {
  try {
    const resp = await fetchData(`/traders`);
    const _data = resp.data.map((d) => ({
      ...d,
      id: d._id,
    }));

    return _data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getParticipantFixtures(req, res) {
  try {
    const resp = await fetchData(`/participantfixtures`);
    const _data = resp.data.map((d) => ({
      ...d,
      id: d._id,
    }));

    return _data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
