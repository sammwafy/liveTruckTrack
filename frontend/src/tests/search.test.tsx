import { render } from '@testing-library/react'
import { getLocationInfo, getSuggestions } from '../addresses'
import { Search } from '../components/search/search'

it('should fetch and render', async () => {
  await new Promise(process.nextTick)
  const locationRes = await getLocationInfo('Berlin, Germany')
  const SuggestionsRes = await getSuggestions('Berlin, Germany')
  expect(locationRes).toMatchSnapshot()

  expect(SuggestionsRes).toMatchSnapshot()

  const { findByText, getByTestId } = render(
    <Search mockSearchValue='Berlin, Germany' />
  )
  expect(
    await findByText(
      '24848, Berlin, Potsdam, Klein Bennebek, Schleswig-Flensburg, Schleswig-Holstein, Germany'
    )
  ).toBeInTheDocument()

  // style component test
  const SearchWrapper = getByTestId('SearchWrapper')

  expect(SearchWrapper).toHaveStyle('padding: 16px 0 24px 0px;')
})
