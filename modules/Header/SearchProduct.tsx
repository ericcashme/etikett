/* eslint-disable react/no-danger */
import React, { memo, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Icon, Input } from 'components'
import { useDebounce } from 'utils'
import * as S from './styles'

const SearchProduct = () => {
  const router = useRouter()
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedValue = useDebounce(searchValue, 400)
  const debouncedIsSearchActive = useDebounce(isSearchActive, 200)

  const handleChangeSearchValue = useCallback((event) => {
    const { value } = event.currentTarget
    setSearchValue(() => value)
  }, [])

  const handleGoSearchPage = useCallback(
    (event) => {
      event.preventDefault()
      const { key, type } = event

      if (key === 'Enter' || type === 'click') {
        router.push({
          pathname: '/busca',
          query: { p: searchValue }
        })
      }
    },
    [router, searchValue]
  )

  return (
    <>
      <S.Overlay isActive={debouncedIsSearchActive || debouncedValue} />
      <S.SearchProduct isActive={debouncedIsSearchActive || debouncedValue}>
        <Input
          isBlock
          id="input-search"
          name="p"
          type="search"
          placeholder="Suche"
          value={searchValue}
          onChange={handleChangeSearchValue}
          onKeyUp={handleGoSearchPage}
          onFocus={() => setIsSearchActive(true)}
          onBlur={() => setIsSearchActive(false)}
          autoComplete="off"
          rightElement={
            <S.SearchButton type="button" onClick={handleGoSearchPage} aria-label="Ir página de busca">
              <Icon name="Search" width="24" height="24" />
            </S.SearchButton>
          }
        />
      </S.SearchProduct>
    </>
  )
}

export default memo(SearchProduct)
