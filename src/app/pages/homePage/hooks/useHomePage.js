import { useEffect, useState } from "react";
import {
  getBets,
  getIndividualFixtures,
  getParticipantFixtures,
} from "../../../apis/api";

const fixtureTypes = [
  { label: "Individual Fixtures", value: "ifix" },
  { label: "Participant Fixtures", value: "pFix" },
];

export function useHomePage() {
  const [data, setData] = useState([]);
  const [bets, setBets] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [ifixtures, setIfixtures] = useState([]);
  const [pfixtures, setPfixtures] = useState([]);
  const [fixture, setFixture] = useState({});
  const [fixtureValue, setFixtureValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFixtureType, setSelectedFixtureType] = useState(
    fixtureTypes[0]
  );
  const [inputValue, setInputValue] = useState("");

  async function handleSetFixtures(data) {
    if (data.value == "pFix") {
      setFixtures(pfixtures);
    } else {
      setFixtures(ifixtures);
    }

    setSelectedFixtureType(data);
  }

  function handleFixtureSelect(fixture) {
    if (fixture && typeof fixture == "object") {
      setFixture(fixture);
      setFixtureValue(fixture.label);
      setBets(data.filter((b) => b.fixture_id == fixture.value));
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const bets = await getBets();
        setBets(bets);
        setData(bets);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const [individualFixtures, participantfixtures] = await Promise.all([
        getIndividualFixtures(),
        getParticipantFixtures(),
      ]);

      const ifxList = individualFixtures.map((ifx) => ({
        value: ifx.fixture_id,
        label: ifx.event_name,
      }));

      const pfxList = participantfixtures.map((pfx) => ({
        value: pfx.fixture_id,
        label: pfx.participant_1,
      }));

      setIfixtures(ifxList);
      setPfixtures(pfxList);
    }

    fetchData();
  }, []);

  useEffect(() => {
    handleSetFixtures(selectedFixtureType);
  }, [selectedFixtureType?.value]);

  return {
    bets,
    fixtures,
    selectedFixtureType,
    setSelectedFixtureType,
    inputValue,
    setInputValue,
    fixtureTypes,
    fixture,
    setFixture,
    fixtureValue,
    handleFixtureSelect,
    error,
    isLoading,
  };
}
