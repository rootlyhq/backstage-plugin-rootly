import { Entity } from '@backstage/catalog-model';
import { RootlyResourceType as Types } from './types';
export declare const ROOTLY_ANNOTATION_SERVICE_ID = "rootly.com/service-id";
export declare const ROOTLY_ANNOTATION_SERVICE_SLUG = "rootly.com/service-slug";
export declare const ROOTLY_ANNOTATION_SERVICE_AUTO_IMPORT = "rootly.com/service-auto-import";
export declare const ROOTLY_ANNOTATION_FUNCTIONALITY_ID = "rootly.com/functionality-id";
export declare const ROOTLY_ANNOTATION_FUNCTIONALITY_SLUG = "rootly.com/functionality-slug";
export declare const ROOTLY_ANNOTATION_FUNCTIONALITY_AUTO_IMPORT = "rootly.com/functionality-auto-import";
export declare const ROOTLY_ANNOTATION_TEAM_ID = "rootly.com/team-id";
export declare const ROOTLY_ANNOTATION_TEAM_SLUG = "rootly.com/team-slug";
export declare const ROOTLY_ANNOTATION_TEAM_AUTO_IMPORT = "rootly.com/team-auto-import";
export declare const RootlyResourceType: typeof Types;
export declare const isRootlyAvailable: (entity: Entity) => boolean;
export declare const autoImportService: (entity: Entity) => boolean;
export declare const autoImportFunctionality: (entity: Entity) => boolean;
export declare const autoImportTeam: (entity: Entity) => boolean;
