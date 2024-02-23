-- Create or replace the existing function, named `calculate_total`
-- Note: if your function has a different argument set, it won't replace the original function
create or replace function calculate_total (
  -- The arguments (this one is optional, but arguments can be mandatory, just skip `default null`)
	type_arg varchar default null
) returns numeric as $$ -- Returns number
begin
	return (
		select SUM(amount) -- Select the sum of all values from the amount column
		from transactions  -- of transactions table
		where              -- where...
			(type = type_arg or type_arg is null) -- The type is type_arg, if type_arg was specified
	);
end;
$$ language plpgsql -- The language of this func is plpgsql (other languages can be used!)