interface Port {
	title: string;
	date: string;
	description: string[];
};

export default function PortEntry(props: Port){
    return (
        <div className="project-details">
                <p className ="project-name">{props.title}</p>
                {/* maybe add date */}
                <p>{props.date}</p>
                <p className ="project-description">{props.description}</p>
                {/* <a href="index.html">Learn more</a> add later*/}
                
        </div>
    )
}