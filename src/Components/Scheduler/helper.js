/**
 * Schedule util
 */

const applyCategoryColor = (args, currentView) => {
	const categoryColor = args.data.CategoryColor
	if (!args.element || !categoryColor) {
		return
	}
	if (currentView === 'Agenda') {
		args.element.firstChild.style.borderLeftColor = categoryColor
	} else {
		args.element.style.backgroundColor = categoryColor
	}
}

export { applyCategoryColor }
