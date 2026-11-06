import { weddingConfig } from '../config/wedding';

/**
 * Generate a Google Calendar event URL for the wedding ceremony
 */
export function getGoogleCalendarUrl(): string {
  const { couple, weddingDetails } = weddingConfig;
  const title = encodeURIComponent(`${couple.bride.firstName} & ${couple.groom.firstName}'s Wedding`);
  const details = encodeURIComponent(
    `We joyfully invite you to celebrate the sacred marriage ceremony of ${couple.bride.fullName} and ${couple.groom.fullName}.\n\nMarriage: Friday, November 13, 2026 at 10:00 AM\nReception: Thursday, November 12, 2026 from 6:00 PM onwards\nVenue: ${weddingDetails.venue.fullAddress}`
  );
  const location = encodeURIComponent(weddingDetails.venue.fullAddress);
  
  // Marriage: Nov 13, 2026 10:00 AM IST is 04:30 UTC
  // Ceremony duration until ~ 02:00 PM IST (08:30 UTC)
  const startTime = '20261113T043000Z';
  const endTime = '20261113T083000Z';
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
}

/**
 * Generate a Google Calendar event URL for the reception
 */
export function getReceptionGoogleCalendarUrl(): string {
  const { couple, weddingDetails } = weddingConfig;
  const title = encodeURIComponent(`${couple.bride.firstName} & ${couple.groom.firstName}'s Wedding Reception`);
  const details = encodeURIComponent(
    `Wedding Reception of ${couple.bride.fullName} & ${couple.groom.fullName}.\n\nDate: Thursday, November 12, 2026 from 6:00 PM onwards\nVenue: ${weddingDetails.venue.fullAddress}`
  );
  const location = encodeURIComponent(weddingDetails.venue.fullAddress);
  
  // Reception: Nov 12, 2026 6:00 PM IST is 12:30 UTC to 10:30 PM IST (17:00 UTC)
  const startTime = '20261112T123000Z';
  const endTime = '20261112T170000Z';
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
}

/**
 * Generate and trigger download of an .ics calendar file containing both Marriage and Reception
 */
export function downloadIcsFile(): void {
  const { couple, weddingDetails } = weddingConfig;
  const location = weddingDetails.venue.fullAddress;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Kavya & Krishna Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    // Event 1: Reception
    'BEGIN:VEVENT',
    'UID:kavya-krishna-reception-2026@wedding.invitation',
    'DTSTAMP:20261101T000000Z',
    'DTSTART:20261112T123000Z',
    'DTEND:20261112T170000Z',
    `SUMMARY:${couple.bride.firstName} & ${couple.groom.firstName} - Wedding Reception`,
    `DESCRIPTION:Wedding Reception of ${couple.bride.fullName} & ${couple.groom.fullName}. From 6:00 PM onwards at GMS Mahal, Thirukalukundram.`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    // Event 2: Marriage Ceremony
    'BEGIN:VEVENT',
    'UID:kavya-krishna-marriage-2026@wedding.invitation',
    'DTSTAMP:20261101T000000Z',
    'DTSTART:20261113T043000Z',
    'DTEND:20261113T083000Z',
    `SUMMARY:${couple.bride.firstName} & ${couple.groom.firstName} - Sacred Marriage Ceremony`,
    `DESCRIPTION:Sacred Wedding Ceremony (Muhurtham at 10:00 AM) of ${couple.bride.fullName} & ${couple.groom.fullName} at GMS Mahal, Thirukalukundram.`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Kavya-and-Krishna-Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
