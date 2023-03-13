/**
 * returned by movie api with an error message etc
 */
export type MovieServerMessage = {
    success:        boolean;
    status_code:    number;
    status_message: string;
}
