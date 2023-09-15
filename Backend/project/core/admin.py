from django.contrib import admin
from .models import *

# Custom Filter for Profile model
class StateFilter(admin.SimpleListFilter):
    title = 'State'
    parameter_name = 'state'

    def lookups(self, request, model_admin):
        return [(state, state) for state in State.values]

    def queryset(self, request, queryset):
        state_filter = self.value()
        if state_filter:
            return queryset.filter(state=state_filter)
        return queryset

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'phoneno', 'state', 'soil')
    list_filter = (StateFilter, 'soil')
    search_fields = ('name', 'phoneno')

admin.site.register(Profile, ProfileAdmin)
admin.site.register(Crop)
admin.site.register(AMI)
admin.site.register(Loan)
admin.site.register(Subsidy)
admin.site.register(Insurance)
admin.site.register(Knowledge)
admin.site.register(Training)
