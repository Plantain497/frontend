import React, { Fragment } from 'react'
import { Layout, Page, FooterHelp, Link, SettingToggle } from '@shopify/polaris'
import { ImportMinor } from '@shopify/polaris-icons'
import { HeaderBar } from './Components/HeaderBar'
// import { Scheduler } from "./Components/Scheduler"

export default function App() {
	const breadcrumbs = [
		{ content: 'Sample apps', url: '/sample-apps' },
		{ content: 'Create React App', url: '/create-react-app' }
	]
	const primaryAction = { content: 'New product' }
	const secondaryActions = [{ content: 'Import', icon: ImportMinor }]

	return (
		<Fragment>
			<HeaderBar />
		</Fragment>
	)
}
