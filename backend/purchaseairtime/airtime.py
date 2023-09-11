# works with both python 2 and 3
from __future__ import print_function

import africastalking

class AIRTIME:
    def __init__(self):
        self.username = 'mike'; #Africa’s Talking application username.

        self.api_key = "apikey"
        africastalking.initialize(self.username,self.api_key)
        self.airtime = africastalking.Airtime

    def send(self,airtime_amount,phone):
        phone_no = phone    #phoneNumber String Required: The phone number that will be topped up in international format (e.g +234811222333).

        amount = airtime_amount  #String Required: The value of airtime to send together with the currency code. The format of this string is: (3-digit Currency Code)(space)(Decimal Value) e.g KES 100.50

        currency_code = "KES"

        try:
            responses = self.airtime.send(phone_number=phone_no,amount = amount,currency_code = currency_code)
        except Exception as e:
            return e
        


if __name__ == '__main__':
    AIRTIME().send()

"""
Example Response
{
    "errorMessage": "None",
    "numSent": 1,
    "totalAmount": "KES 1000.0000",
    "totalDiscount": "KES 40.0000",
    "responses": [{
        "phoneNumber": "+254711XXXYYY",
        "errorMessage": "None",
        "amount": "KES 1000.0000",
        "status": "Sent",
        "requestId": "ATQid_1be914ac47845eef1a1dab5d89ec50ff",
        "discount": "KES 40.0000"
    }]
}
"""
