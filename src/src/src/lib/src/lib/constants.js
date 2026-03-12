export const COUNTRIES = ["Argentina","Chile","Colombia","Costa Rica","El Salvador","Perú","República Dominicana"]
export const PIPELINE_STAGES = ["Primer Contacto","Reunión","Propuesta Enviada","Re-Propuesta","Ganado","Perdido"]
export const TIERS = ["Tier 1","Tier 2","Tier 3","Tier 4"]
export const BPM_TASKS = ["Crear Cliente","Agreement","Tarifas","Integración configurada","Alta operativa","Facturación configurada","Go Live"]
export const MODALITIES = ["B2C","B2B","B2B2C"]
export const DELIVERY_TYPES = ["Domicilio","Sucursal","Locker","Express"]
export const RETURN_TYPES = ["Logística Inversa","Sin Retorno","Retorno Parcial"]
export const BILLING_EVENTS = ["Despacho","Entrega","Mensual","Quincenal"]
export const INTEGRATION_TYPES = ["API REST","Shopify","WooCommerce","VTEX","Magento","Manual"]
export const CURRENCIES = ["USD","ARS","CLP","COP","CRC","PEN","DOP"]
export const ACTIVITY_TYPES = ["Llamada","Email","Reunión","Tarea"]
export const LOSS_REASONS = ["Precio","Competidor","Sin respuesta","Timing","Servicio no aplica","Volumen insuficiente","Otro"]
export const PROSPECT_STATUSES = ["Sin Contacto","En Investigación","Contactado"]
export const EXCEL_STATUS_MAP = {
  'Primer Contacto (Contactado)': 'Primer Contacto',
  'Primer Contacto': 'Primer Contacto',
  'Reunión (En Proceso / Visitado)': 'Reunión',
  'Reunión': 'Reunión',
  'Propuesta Enviada': 'Propuesta Enviada',
  'Re-Propuesta': 'Re-Propuesta',
  'Onboarding': 'Ganado',
  'Ganado': 'Ganado',
  'Perdido': 'Perdido',
}
export const STAGE_COLORS = {
  "Primer Contacto":"#3B82F6",
  "Reunión":"#8B5CF6",
  "Propuesta Enviada":"#F59E0B",
  "Re-Propuesta":"#F97316",
  "Ganado":"#10B981",
  "Perdido":"#EF4444"
}
export const ACTIVITY_ICONS = { "Llamada":"📞","Email":"📧","Reunión":"🤝","Tarea":"✅" }
export const ACTIVITY_COLORS = { "Llamada":"#3B82F6","Email":"#8B5CF6","Reunión":"#10B981","Tarea":"#F59E0B" }
export const STALE_DAYS = 7
