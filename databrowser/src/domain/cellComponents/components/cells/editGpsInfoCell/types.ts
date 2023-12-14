// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export interface GpsInfoEntry {
  Gpstype?: string;
  Latitude?: string | number;
  Longitude?: string | number;
  Altitude?: string | number;
  AltitudeUnitofMeasure?: string;
}
