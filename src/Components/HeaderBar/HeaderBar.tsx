import React, { useState, useCallback } from 'react'
import { TopBar, AppProvider, ActionList, Card, Frame } from '@shopify/polaris'
import { LogOutMinor } from '@shopify/polaris-icons'

function HeaderBar() {
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
	const [isSearchActive, setIsSearchActive] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const toggleIsUserMenuOpen = useCallback(
		() => setIsUserMenuOpen(isUserMenuOpen => !isUserMenuOpen),
		[]
	)

	const handleSearchResultsDismiss = useCallback(() => {
		setIsSearchActive(false)
		setSearchValue('')
	}, [])

	const handleSearchChange = useCallback(value => {
		setSearchValue(value)
		setIsSearchActive(value.length > 0)
	}, [])

	const handleNavigationToggle = useCallback(() => {
		console.log('toggle navigation visibility')
	}, [])

	const theme = {
		colors: {
			topBar: {
				background: '#454F5B'
			}
		},
		logo: {
			width: 124,
			topBarSource: 'https://plantain.s3.us-east-2.amazonaws.com/logo.svg',
			url: '/',
			accessibilityLabel: 'Plantain'
		}
	}

	const userMenuMarkup = (
		<TopBar.UserMenu
			actions={[
				{
					items: [{ content: 'Logout', icon: LogOutMinor }]
				}
			]}
			name="Sally"
			detail="Plantain"
			initials="SH"
			open={isUserMenuOpen}
			onToggle={toggleIsUserMenuOpen}
		/>
	)
	const searchResultsMarkup = (
		<Card>
			<ActionList
				items={[
					{ content: 'Shopify help center' },
					{ content: 'Community forums' }
				]}
			/>
		</Card>
	)
	const searchFieldMarkup = (
		<TopBar.SearchField
			onChange={handleSearchChange}
			value={searchValue}
			placeholder="Search"
		/>
	)
	const topBarMarkup = (
		<TopBar
			showNavigationToggle
			userMenu={userMenuMarkup}
			searchResultsVisible={isSearchActive}
			searchField={searchFieldMarkup}
			searchResults={searchResultsMarkup}
			onSearchResultsDismiss={handleSearchResultsDismiss}
			onNavigationToggle={handleNavigationToggle}
		/>
	)
	return (
		<AppProvider
			theme={theme}
			i18n={{
				Polaris: {
					Avatar: {
						label: 'Avatar',
						labelWithInitials: 'Avatar with initials {initials}'
					},
					Frame: { skipToContent: 'Skip to content' },
					TopBar: {
						toggleMenuLabel: 'Toggle menu',
						SearchField: {
							clearButtonLabel: 'Clear',
							search: 'Search'
						}
					}
				}
			}}
		>
			<Frame topBar={topBarMarkup} />
		</AppProvider>
	)
}

export default HeaderBar
