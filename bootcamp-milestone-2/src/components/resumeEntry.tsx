import { REntry } from "@/app/resumeData";


export default function ResumeEntry(props: REntry){
    return (
        <div className="entry">
        <h3 className="entry-title">{props.entry_title}</h3>
        <p className="entry-info">
            {props.entry_info}
        </p>
        <p className="entry-info">
            {props.entry_date}
        </p>
        <p className="entry-description">
            {props.entry_des}
        </p>
    </div>
    )

}