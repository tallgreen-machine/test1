import React from 'react';
import { Store, Package, Inbox, Users, ShieldCheck, RefreshCw, Layers, ListOrdered, Tag, Smartphone, Folder } from "lucide-react";

export const iconMap: { [key: string]: React.ReactElement<{ className?: string }> } = {
  dispensaries: React.createElement(Store),
  products: React.createElement(Package),
  'orders-received': React.createElement(Inbox),
  users: React.createElement(Users),
  roles: React.createElement(ShieldCheck),
  'inventory-fwpf': React.createElement(RefreshCw),
  'inventory-ss': React.createElement(RefreshCw),
  productTypes: React.createElement(Layers),
  categorySort: React.createElement(ListOrdered),
  alertBanners: React.createElement(Tag),
  mobileNav: React.createElement(Smartphone),
  categories: React.createElement(Folder),
};