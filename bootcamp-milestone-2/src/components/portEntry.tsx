import style from './portEntry.module.css'
interface Port {
	title: string;
	date: string;
	description: string[];
};

export default function PortEntry(props: Port){
    return (
        <div className="card">
                <p className ={style.projectname}>{props.title}</p>
                {/* maybe add date */}
                <p>{props.date}</p>
                <p className ="project-description">{props.intro}</p>
                {/* <a href="index.html">Learn more</a> add later*/}
                
        </div>
    )
}