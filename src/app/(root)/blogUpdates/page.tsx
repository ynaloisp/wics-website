export default function Blog() {
    return (
        <div>
            <form className="space-y-4 flex flex-col items-center padding-10">
                <h1 className="text-2xl font-bold">Blog Updates</h1>
                <input
                    type="text"
                    id="eventName"
                    placeholder="Event Name"
                    required
                />
                <input type="date" id="eventDate" required />
                <input type="time" id="eventTime" required />
                <input type="file" id="flyer" accept="image/*" required />
                <textarea
                    id="eventDetails"
                    placeholder="Event Details"
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>

            <div id="statusMessage"></div>
        </div>
    );
}
