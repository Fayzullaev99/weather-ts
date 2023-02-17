import useForecast from "./components/hooks/useForecast"
import Search from "./components/Search"
const App = (): JSX.Element => {
  const {term,options,forecast,onInputChange,onSubmit,onOptionSelect,} = useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        'we have forecast'
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onOptionSelect={onOptionSelect}
        />
      )}
    </main>
  )
}

export default App
