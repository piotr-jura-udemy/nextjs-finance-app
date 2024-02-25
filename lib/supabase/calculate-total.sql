-- Create or replace the existing function, named `calculate_total`
-- Note: if your function has a different argument set, it won't replace the original function
create or replace function calculate_total (
  -- The arguments (this one is optional, but arguments can be mandatory, just skip `default null`)
	range_arg varchar default 'last30days',
	type_arg varchar default null
) returns table(current_amount numeric, previous_amount numeric) as $$ -- Returns number
declare
	currentStart timestamp;
	currentEnd timestamp;
	previousStart timestamp;
	previousEnd timestamp;
begin
	currentEnd := now();
	currentStart := case
		when range_arg = 'last24hours' then currentEnd - interval '24 hours'
		when range_arg = 'last7days' then currentEnd - interval '7 days'
		when range_arg = 'last30days' then currentEnd - interval '30 days'
		when range_arg = 'last12months' then currentEnd - interval '12 months'
		else currentEnd - interval '30 days'
	end;
	previousEnd := currentStart - interval '1 second';
	previousStart := currentStart - (currentEnd - currentStart);
	current_amount := (
		select COALESCE(SUM(amount), 0) -- Select the sum of all values from the amount column
		from transactions  -- of transactions table
		where              -- where...
			(type = type_arg or type_arg is null) -- The type is type_arg, if type_arg was specified
			and (created_at between currentStart and currentEnd)
	);
	previous_amount := (
		select COALESCE(SUM(amount), 0) -- Select the sum of all values from the amount column
		from transactions  -- of transactions table
		where              -- where...
			(type = type_arg or type_arg is null) -- The type is type_arg, if type_arg was specified
			and (created_at between previousStart and previousEnd)
	);
	return next;
end;
$$ language plpgsql -- The language of this func is plpgsql (other languages can be used!)