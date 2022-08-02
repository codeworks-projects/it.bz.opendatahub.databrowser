import { CellComponent } from '../../../domain/cellComponents/types';
import { EditViewConfig } from '../../../domain/datasetConfig/types';

export const eventShortEditView: EditViewConfig = {
  elements: [
    {
      name: 'Main data',
      slug: 'main-data',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'Shortname',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Shortname' },
              required: true,
              tooltip: 'This is the shortname for your event',
            },
          ],
        },
        {
          name: 'IDs',
          properties: [
            {
              title: 'ID',
              component: CellComponent.StringCell,
              fields: { text: 'Id' },
              class: 'break-all',
            },
          ],
        },
        {
          name: 'Data states',
          properties: [
            {
              title: 'Last Changes',
              component: CellComponent.DateCell,
              fields: { date: 'LastChange' },
              params: {
                format: 'd/M/yyyy HH:mm',
              },
            },
          ],
        },
        {
          name: 'Source',
          properties: [
            {
              title: 'Source',
              component: CellComponent.StringCell,
              fields: { text: 'Source' },
            },
          ],
        },
      ],
    },
    {
      name: 'Text information',
      slug: 'text-information',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'Shortname',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Shortname' },
            },
          ],
        },
        {
          name: 'Description',
          properties: [
            {
              title: 'Event description',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'EventDescription' },
              tooltip: 'Default event description',
            },
            {
              title: 'Event description DE',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'EventDescriptionDE' },
              tooltip: 'Event description in German',
            },
            {
              title: 'Event description IT',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'EventDescriptionIT' },
              tooltip: 'Event description in Italian',
            },
            {
              title: 'Event description EN',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'EventDescriptionEN' },
              tooltip: 'Event description in English',
            },
          ],
        },
      ],
    },
    {
      name: 'Company',
      slug: 'company',
      subcategories: [
        {
          name: 'Name and Company Data',
          properties: [
            {
              title: 'Name',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyName' },
            },
            {
              title: 'Company ID',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyId' },
            },
          ],
        },
        {
          name: 'Address',
          properties: [
            {
              title: 'Street and House No',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyAddressLine1' },
            },
            {
              title: 'ZIP-Code',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyPostalCode' },
            },
            {
              title: 'City',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyCity' },
            },
            {
              title: 'Country',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyCountry' },
            },
          ],
        },
        {
          name: 'Contact Details',
          properties: [
            {
              title: 'E-Mail',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyMail' },
            },
            {
              title: 'Phone Number',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyPhone' },
            },
            {
              title: 'Web-URL',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'CompanyUrl' },
            },
          ],
        },
      ],
    },
    {
      name: 'Contact',
      slug: 'contact',
      subcategories: [
        {
          name: 'Name',
          properties: [
            {
              title: 'Name',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactFirstName' },
            },
            {
              title: 'Surname',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactLastName' },
            },
          ],
        },
        {
          name: 'Address',
          properties: [
            {
              title: 'Street and House No',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactAddressLine1' },
            },
            {
              title: 'ZIP-Code',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactPostalCode' },
            },
            {
              title: 'City',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactCity' },
            },
            {
              title: 'Country',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactCountry' },
            },
          ],
        },
        {
          name: 'Contact Details',
          properties: [
            {
              title: 'E-Mail',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactEmail' },
            },
            {
              title: 'Phone Number',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactPhone' },
            },
          ],
        },
      ],
    },
    {
      name: 'Location',
      slug: 'location',
      subcategories: [
        {
          name: 'Location',
          properties: [
            {
              title: 'Eventlocation',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'EventLocation' },
            },
          ],
        },
        {
          name: 'Rooms',
          properties: [
            {
              title: 'Anchor venue room',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'AnchorVenueRoomMapping' },
            },
            {
              title: 'Rooms booked',
              component: CellComponent.TypeBasedCell,
              fields: { data: 'RoomBooked' },
            },
          ],
        },
      ],
    },
  ],
};