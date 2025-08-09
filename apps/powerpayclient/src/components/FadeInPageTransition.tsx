import React from "react"

interface Props {
	children: React.ReactNode,
	className?: string
}

export const FadeInPageTransition = ({ children, className }: Props) => {
	return (<>
		<div className={"w-full h-fit animate-fadein" + ` ${className ?? ""}`}>{children}</div>
	</>)
}

export function WrapFadeTransition<p extends {}>(Element: React.ComponentType<p>, className?: string): React.FC<p> {
	return function FadeWrappedComponent(props: p) {
		return (<FadeInPageTransition className={className}>
			<Element {...props} />
		</FadeInPageTransition>)
	}
}
