export interface CreateSet {
    (partial: unknown, replace?: false): void;
    (state: unknown, replace: true): void;
}