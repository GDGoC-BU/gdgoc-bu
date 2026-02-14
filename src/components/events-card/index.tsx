interface EventCardProps {
    title: string;
    date: string;
    type: string;
    description: string;
    imagePath: string;
    status: 'upcoming' | 'past';
}

function EventsCard({
    title, date, type, description, imagePath, status,
} : EventCardProps) {

    let buttonClassName;
    if (status === 'upcoming'){
        buttonClassName = "mt-4 w-fit bg-brand-blue-300 text-white font-bold py-2 px-8 rounded-xl brand-border hover:opacity-90 transition-opacity";
    }
    else {
        buttonClassName = "mt-4 w-fit text-brand-blue-300 font-bold hover:underline transition-all flex items-center gap-1"
    }

    return (
      <div className="flex flex-col brand-border rounded-2xl overflow-hidden bg-background max-w-sm transform transition-all hover:-translate-y-2">
      {/* Image Section */}
      <div className="bg-brand-blue-100 p-10 flex justify-center items-center border-b-2 border-brand-black-200">
        {/* dito sa object cover, di ko sure so yan muna nilagay ko*/}
         <img src={imagePath} alt={title} className="h-32 object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-brand-blue-300 line-clamp-2" title={title}>{title}</h3>
        
        <p className="text-sm text-brand-black-200">
            <span className = 'font-bold'> {date}</span>
            <span> | {type}</span>
        </p>
        
        <p className="text-brand-black-200 mt-2 text-sm line-clamp-3"> {title} - {description}
        </p>
        
        {/* Button */}
        <button className={buttonClassName}>
          {status === 'upcoming' ? 'RSVP Now' : '→ View Details'}
        </button>
      </div>
    </div>
    );
}

export default EventsCard;