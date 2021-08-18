import { Text } from '@chakra-ui/core'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const markdownTheme = {
	code(props) {
		console.log({ props })
		return (
			<Text fontSize={12}>
				<SyntaxHighlighter
					language={props.language}
					PreTag="div"
					{...props}
				>{props.value}</SyntaxHighlighter>
			</Text>
		)
	}
}