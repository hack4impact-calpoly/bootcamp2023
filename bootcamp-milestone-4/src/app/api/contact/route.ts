export async function POST(request : NextRequest) {
    // make the data for an email message 
    const {user, comment} = await request.json();
    // Error handling if no user or comments given
    if (!user || !comment) {
        return NextResponse.json({message: "Insufficient Data"}, {status: 400});
    }

    const currentDateUTC = new Date();

    // Convert UTC time to a specific timezone (e.g., UTC+2:00, replace '2' with your timezone offset)
    const timezoneOffset = -8; // Replace with your desired offset
    const offsetInMilliseconds = timezoneOffset * 60 * 60 * 1000; // Convert hours to milliseconds
    const error = 600000;
    const currentLocalTime = new Date(currentDateUTC.getTime() + offsetInMilliseconds + error); // Get millseconds and do calculations to do some time adjustments and then make that back into a date 
    console.log(currentLocalTime)
    const date = currentLocalTime
    const photo = "/images/profile.jpeg"   //! This is here as a defaullt profile picture


    var data = {
        service_id: 'YOUR_SERVICE_ID',
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_PUBLIC_KEY',
        template_params: {
            'username': 'James',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });