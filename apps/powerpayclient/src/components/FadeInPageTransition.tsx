import React from "react"

interface Props {
	children: React.ReactNode
}

export const FadeInPageTransition = ({ children }: Props) => {
	return (<>
		<div className="w-full h-fit animate-fadein">{children}</div>		
	</>)
}

export function WrapFadeTransition<p extends {}>(Element: React.ComponentType<p>) : React.FC<p> {
	return function FadeWrappedComponent(props: p){
		return (<FadeInPageTransition>
			<Element {...props}/>
		</FadeInPageTransition>)
	}
}
