import NavMenu from "../../components/NavMenu/NavMenu";
import SearchBar from "../../components/SearchBar/SearchBar";
import Units from "../../components/Units/Units";

export default function SettingsPage() {
  return (
    <main className="h-full flex">
      <NavMenu />
      <SearchBar />
      <Units />
    </main>
  )
}