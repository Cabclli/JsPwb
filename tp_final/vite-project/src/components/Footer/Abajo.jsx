import { useLocation } from "../../hooks/useLocation";
export function location() {
  const { getAllLocation, location } = useLocation();
  useEffect(() => {
    getAllLocation();
  }, []);

  return;
  <>
    <h1>sajdaoisjio</h1>;
  </>;
}
