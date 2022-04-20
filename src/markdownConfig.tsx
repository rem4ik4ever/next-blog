import { Link, Text } from '@chakra-ui/core'

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const markdownTheme = {
	code(props) {
		return (
			<Text fontSize={12}>
				<SyntaxHighlighter
					language={props.language}
					PreTag="div"
					{...props}
				>{props.value}</SyntaxHighlighter>
			</Text>
		)
	},
	link(props) {
		const {children, href} = props;
		return (
			<Link href={href} color="teal.400">{children}</Link>
		)
	}
}

export const markdownRenderer = {
	...ChakraUIRenderer(),
	...markdownTheme
}
