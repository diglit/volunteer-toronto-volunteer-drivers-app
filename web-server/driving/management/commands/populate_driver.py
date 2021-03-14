from django.core.management.base import BaseCommand, CommandError
from django.apps import apps
import csv
import os

from driving.models import Driver


class Command(BaseCommand):
    help = "populates drivers table"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.model_name = Driver

    def add_arguments(self, parser):
        parser.add_argument("filename", type=str, help="filename for csv file")
        parser.add_argument(
            "--delete-data",
            help="delete existing data in DB before writing in CSV data",
            action="store_true",
        )

    def clear_model(self):
        try:
            self.model_name.objects.all().delete()
        except Exception as e:
            raise CommandError(f"Error in clearing {self.model_name}: {str(e)}")

    def insert_driver_to_db(self, data):
        try:
            self.model_name.objects.create(
                name=data["name"],
                status=data["status"],
                email=data["email"],
                advisor_name=data["advisor_name"],
                languages=data["languages"],
                organization_referral=data["organization_referral"],
                second_match=data["second_match"],
                community=data["community"],
                other=data["other"],
                # TODO: add availability
                contactless=data["contactless"],
                high_risk_contact=data["high_risk_contact"],
                up_to_thirty=data["up_to_thirty"],
                up_to_fifty=data["up_to_fifty"],
                packaging_sorting=data["packaging_sorting"],
                # TODO: add policecheck/willing
                # TODO: add driversabstract/willing
                car_access=data["car_access"],
                van_truck_access=data["van_truck_access"],
                one_mill_insurance=data["one_mill_insurance"],
                two_mill_insurance=data["two_mill_insurance"],
                g_license=data["g_license"],
                other_license_class=data["other_license_class"],
            )
        except Exception as e:
            raise CommandError(f"Error in inserting {self.model_name}:{str(e)}")

    def handle(self, *args, **kwargs):
        filename = kwargs["filename"]
        delete_old_data = kwargs["delete_data"]
        self.stdout.write(self.style.SUCCESS(f"filename:{filename}"))

        driver_status = {
            "Not matched": "NM",
            "Referred": "R",
            "Matched not confirmed": "MNC",
            "Matched and confirmed": "MAC",
            "Follow Up": "FU",
            "Match incomplete": "MI",
            "Re-Match Required": "RMR",
        }
        communities = {
            "Downtown Toronto": "DT",
            "North York East": "NYE",
            "North York West": "NYW",
            "Mid-Town Toronto": "MTT",
            "East York/Beaches": "EYB",
            "Scarborough East": "SE",
            "Scarborough West": "SW",
            "North Etobicoke": "NE",
            "South Etobicoke": "SE",
            "Toronto West": "TW",
        }

        if delete_old_data:
            self.clear_model()

        line_count = 0
        try:
            with open(filename) as csv_file:
                csv_reader = csv.reader(csv_file, delimiter=",")
                for _ in range(2):
                    next(csv_reader)

                for row in csv_reader:
                    if row:
                        data = {}
                        data["name"] = row[0]
                        data["status"] = bool(row[1])
                        data["email"] = row[2]
                        data["advisor_name"] = row[4]
                        data["languages"] = row[5]
                        data["organization_referral"] = row[6]
                        data["second_match"] = row[7]
                        data["community"] = bool(row[8])
                        data["other"] = row[9]
                        data["contactless"] = bool(row[11])
                        data["high_risk_contact"] = bool(row[12])
                        data["up_to_thirty"] = bool(row[14])
                        data["up_to_fifty"] = bool(row[15])
                        data["packaging_sorting"] = bool(row[16])
                        data["car_access"] = bool(row[19])
                        data["van_truck_access"] = bool(row[20])
                        data["one_mill_insurance"] = bool(row[21])
                        data["two_mill_insurance"] = bool(row[22])
                        data["g_license"] = bool(row[23])
                        data["other_license_class"] = row[24]

                        self.insert_driver_to_db(data)
                        line_count += 1
            self.stdout.write(
                self.style.SUCCESS(f"{line_count} entries added to Drivers")
            )
        except FileNotFoundError:
            raise CommandError(f"File {filename} does not exist")

    def switch(self, choices, x):
        return choices.get(x)
