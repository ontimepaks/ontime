import { NextResponse } from "next/server";
import { Resend } from "resend";






export async function POST(request) {
    try {

        let { username, userEmail, userMsg } = await request.json();

        if (!username || !userEmail || !userMsg) {
            return NextResponse.json({ success: false, reason: "All data is required", username, userEmail, userMsg })
        }

        const html = `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:20px;font-family:Arial,sans-serif;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:#0070f3;color:#ffffff;text-align:center;padding:20px;font-size:24px;">
              Ontime Website Contact
            </td>
          </tr>
          <tr>
            <td style="padding:30px;color:#333333;font-size:16px;line-height:1.5;">
              <p><strong>Name:</strong> ${username}</p>
              <p><strong>Email:</strong> <a href="mailto:${userEmail}" style="color:#0070f3;">${userEmail}</a></p>
              <p><strong>Message:</strong><br/>${userMsg.replace(/\n/g, '<br/>')}</p>
              <p>— Your Website Bot</p>
            </td>
          </tr>
          <tr>
            <td style="background:#f0f0f0;color:#777777;text-align:center;padding:15px;font-size:12px;">
              © ${new Date().getFullYear()} Ontime Agency
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;




        let resend = new Resend(process.env.resend_key);
        if (!resend) {
            return NextResponse.json({ success: false, reason: "Resend instance is not created" })
        }

        const { data, error } = await resend.emails.send({
            from: 'Ontime Website Contact <onboarding@resend.dev>',
            to: 'ontimepaks@gmail.com',
            subject: 'Contact from ontime website',
            html: html,
        });



        if(error){
            return NextResponse.json({success:false, reason:"Error in resend emailing"})
        }

        return NextResponse.json({success:true, msg:"The email is send successfully", data})


    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, reason: "error" })
    }
}