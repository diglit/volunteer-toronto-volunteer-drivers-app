from django.db import models


class Driver(models.Model):
    DRIVER_STATUS = (
        ("NM", "Not Matched"),
        ("R", "Referred"),
        ("MNC", "Matched not Confirmed"),
        ("MAC", "Matched and Confirmed"),
        ("FU", "Follow Up"),
        ("MI", "Match Incomplete"),
        ("RMR", "Rematch Required"),
    )
    COMMUNITIES = (
        ("DT", "Downtown Toronto"),
        ("NYE", "North York East"),
        ("NYW", "North York West"),
        ("MTT", "Mid Town Toronto"),
        ("EYB", "East York/ Beaches"),
        ("SE", "Scarborough East"),
        ("SW", "Scarborough West"),
        ("NE", "North Etobicoke"),
        ("SE", "South Etobicoke"),
        ("TW", "Toronto West"),
    )
    created = models.DateTimeField(auto_now_add=True)
    name = models.TextField()
    status = models.CharField(max_length=3, choices=DRIVER_STATUS)
    email = models.TextField()
    advisor_name = models.TextField()
    languages = models.TextField()
    organization_referral = models.TextField()
    second_match = models.TextField()
    community = models.CharField(max_length=3, choices=COMMUNITIES)
    other = models.TextField()
    # TODO: add availability
    contactless = models.BooleanField()
    high_risk_contact = models.BooleanField()
    up_to_thirty = models.BooleanField()
    up_to_fifty = models.BooleanField()
    packaging_sorting = models.BooleanField()
    # TODO: add policecheck/willing
    # TODO: add driversabstract/willing
    car_access = models.BooleanField()
    van_truck_access = models.BooleanField()
    one_mill_insurance = models.BooleanField()
    two_mill_insurance = models.BooleanField()
    g_license = models.BooleanField()
    other_license_class = models.TextField()

    def __str__(self):
        return f"{self.name} - {self.email}"
